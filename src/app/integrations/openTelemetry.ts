import { BatchSpanProcessor, WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

type OtelServiceConfig = {
  serviceName: string;
  collectorURL: string;
};

export const runOpenTelemetry = (config: OtelServiceConfig) => {
  if (!config.serviceName || !config.collectorURL) {
    throw Error('A non-empty collectorURL and serviceName are mandatory for Open Telemetry to work');
  }

  const { serviceName, collectorURL } = config;

  const collectorOptions = {
    url: `${collectorURL}/v1/traces`,
    headers: {},
    concurrencyLimit: 10,
  };

  const provider = new WebTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
  });

  const exporter = new OTLPTraceExporter(collectorOptions);
  provider.addSpanProcessor(new BatchSpanProcessor(exporter));

  provider.register({
    contextManager: new ZoneContextManager(),
  });

  registerInstrumentations({
    instrumentations: [
      getWebAutoInstrumentations({
        '@opentelemetry/instrumentation-xml-http-request': {
          propagateTraceHeaderCorsUrls: [/.+/g],
        },
        '@opentelemetry/instrumentation-fetch': {
          propagateTraceHeaderCorsUrls: [/.+/g],
        },
      }),
    ],
  });
};
