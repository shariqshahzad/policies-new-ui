# Changelog

# [3.2.0] - 12.04.2024

- Bump `@takamol/react-qiwa-core` to 2.3.0
- Add SVG spinner before React loads, for better UX and FCP metrics

# [3.1.2] - 20.03.2024

- Set limit for chunks (js, css, media) to be max as small as possible (only contenthash:8) to fulfill F5 rule that set maximum to 128 chars for entire chunk url on production
- Add cleanup function for new projects starting with starter ONLY
- Bump `@takamol/react-qiwa-core` to 2.2.0
- Enable Global Search functionality by default from `demo` and `stage` environments

# [3.1.0] - 28.02.2024

- Bump `@takamol/react-qiwa-core` to 2.1.0
- Change setting up msw handlers to use `createHandlerMocks` function from the `@takamol/react-qiwa-core`
- Add table of contents with all starter links to dashboard pages
- Bump `@takamol/eslint-config` to `1.2.0` and fix linting issues
- Fix redundant multiple loading of design system fonts

# [3.0.0] - 22.02.2024

- Bump `react-qiwa-core` to 2.0.1
- Integrate with microfrontends
- Remove the `full-icu` as it is not needed anymore on current node version
- Add `eslint-plugin-react-hooks`
- Integrate with dynamic locales, which reduces bundle size. Make loading JSON files dynamic across the repo

# [2.34.0] - 19.02.2024

- Updated core version to 1.9.0
- Updated DS version to 1.73.0

Changelog of core 1.9.0:

## Features:

- Move local assets to CDN
- Add Search to following navigations:
  - BusinessNavigation
  - IndividualsNavigation
  - IndividualsInternalNavigation
- Add feature flag for Search functionality

# [2.33.0] - 13.02.2024

- Updated core version to 1.8.1
- Updated DS version to 1.72.1

Changelog of core 1.8.1:

## Features:

- open Knowledge Center links in new tabs

## Improvement:

- show `Services` link in sidebar as active only on location part of `establishment information service`

# [2.32.0] - 07.02.2024

- Updated core version to 1.8.0
- Updated DS version to 1.70.0

Changelog of core 1.8.0:

## Improvements:

- add loading state handling for `PrivateRoute` to prevent redirection to the forbidden page before permissions are fetched
- fix removing jsdoc comments in the build step. Now JSdoc comments should be preserved
- add `Template Manager` role to UserRole interface

# [2.31.1] - 02.02.2024

- remove the BASE - prefixed translations - they are included in core
- remove the BASE - prefixed translations from `src/app/translations/i18n/dictionary/dictionary.json`

# [2.31.0] - 30.01.2024

- Updated core version to 1.7.0
- Updated DS version to 1.70.0

Changelog of core 1.7.0:

## Features:

- bumps up the required DS version as peerDependency to version at least - `^1.68.0`
- add LayoutComponent prop, to ErrorPage in order to allow clients make custom layouts on error pages

## Improvements:

- **Internal** adjust eslint config, add new rules, remove unnecessary ones
- add a11y eslint rule, and fix existing issues
- **Breaking** remove emitting of the event: `qiwa-core/changeWorkspace` after changing establishment in business sidebar

## Bugfixes:

- fix an issue where the redirection to dashboard was not occurring after changing the establishment using the business sidebar

# [2.30.0] - 23.01.2024

- Updated core version to 1.6.1

Changelog of core 1.6.1:

## Features:

## Improvements:

## Bugfixes:

- add a proper Facebook link to all Footer components
- fix "Manage your career on Qiwa" footer link address

# [2.29.0] - 22.01.2024

- Updated core version to 1.6.0

Changelog of core 1.6.0:

## Features:

- handle loading translations in a dynamic fashion per locale

## Improvements:

## Bugfixes:

- add lambda util to bundle
- fix change workspace link name and href in Account component

# [2.28.0] - 12.01.2024

- Updated core version to 1.5.5
- upgrade Axios to v1.6.2

Changelog of core 1.5.5:

# 1.5.5

## Features:

- drop `redirect_uri` key - instead we will use `redirect_uri_company` as default if we cant determine user account type
- clients can override redirection logic using `configureAuth` this is go-to solution for individuals and clients who needs to use both `redirect_uri_company` and `redirect_uri_individual`
- add `'ets-admin'` state to sessionResponseMock for ETS team

## Improvements:

- upgrade Axios to v1.6.2 clients are expected to upgrade their axios version to 1.6.x or higher
- remove logo link from Unified Portal Navigation
- redirect to service origin URL when switching establishment
- **Internal** add additional script to prevent `process is not defined` issue on production, when using legacy-microfrontends with `@takamol/agnostic-qiwa-core`

## Bugfixes:

- fix other workspaces visibility in business sidebar

# [2.27.0] - 20.12.2023

- Updated core version to 1.5.4 and updated design system version to 1.59.0

Changelog of core 1.5.4:

# 1.5.4

## Features:

- add language switcher to footer
- `LanguageSelect` supports all locales, based on `messages` object keys, passed to `AppProviders`
- add typedEntries utils function, for typed Object.entries

## Improvements:

- bumps up the required DS version as peerDependency to version at least - `^1.59.0`

## Bugfixes:

# [2.26.0] - 06.12.2023

- Switch to new SPA gitlab-ci config
- add sonar configuration
- add healthcheck to docker-compose.yml
- replace `@statoscope/webpack-plugin` with `webpack-bundle-analyzer`
- Updated core version to 1.5.2 and updated design system version to 1.57.0

Changelog of core 1.5.2:

# 1.5.2

## Features:

## Improvements:

- remove remoteEntry webpack config (no direct impact on end users of core library)
- memoize t function from useCoreLocale
- add more strict eslint rules for imports
- update eslint and prettier plugins
- remove unused commands
- add flag icons to Language picker and change the order of languages

## Bugfixes:

# [2.25.0] - 29.11.2023

Updated core version to 1.5.0 and updated design system version to 1.55.1

Changelog of core 1.5.0:

# 1.5.0

## Features:

- export pubsub (needed for sharable services `qiwa-core/changeLocale` and `logoutSharableService` events) from core

## Improvements:

- add additional logic to determine users role in UserRoleService `getRoles` method for users without subscription
- bumps up the required DS version as peerDependency to version at least - `^1.55.1`
- add new permissions to ServicePermission interface
- introduce abosolute imports, add eslint plugin to follow the rule

## Bugfixes:

- fix unnecessary rerenders of queryClient instance

# [2.24.0] - 27.11.2023

Changelog of core 1.4.4:

# 1.4.4

## Features:

- make qiwa logo in header clickable link

## Improvements:

- bumps up the required DS version as peerDependency to version at least - `^1.54.0`
- align core components with figma designs

# [2.23.0] - 21.11.2023

Update the design-system package to newest one `1.54.0`, which resulted in reduced `framer-motion` bundle size, due to better treeshaking
Add additional webpack config to treat iamge like assets above 8kB as original files to not convert it base64 (improves performance)
Add config for new Qa environment - new env.qa file
Update core version to 1.4.3

Changelog of core 1.4.3:

# 1.4.3

## Features:

- add links for the new QA environment in ExternalUrl map - now core supports the QA environment

## Improvements:

- remove humps dependency and provide our implementation (no direct impact on end users of core library - only smaller bundle size of core)
- bumps up the required DS version as peerDependency to version at least - `^1.52.0`
- show toast error message for string errors as well

# [2.22.0] - 16.11.2023

Add new babel-configuration
Update the design-system package to newest one `1.51.0` - and remove deep imports
Add more developer-friendly process of using msw mock-server for developing application without hitting stage/demo apis
Update core version to 1.4.2

Changelog of core 1.4.2:

## Improvements:

- change bundler from Webpack to Rollup to make library more tree-shakeable (no direct impact on end users of core library - only smaller bundle size of core)

# [2.21.0] - 06.11.2023

Add new nginx config with cache for js and other static files (images, fonts)
Update core version to 1.4.1

Changelog of core 1.4.1:

# 1.4.1

## Features:

- add new links for sso-services (change-password, edit-profile, payments-and-users) on staging

## Improvements:

- remove circular dependency in auth module imports (no direct impact on end users of core library)

## Bugfixes:

- add correct translation contents to the 404 not found page
- add fix for FormData headers to be sent on refreshInterceptor (previously the axios wasn't automatically retrying POST request if it contained FormData)

# [2.20.0] - 31.10.2023

Add better support for HMR (Hot module replacement) in development

# [2.19.1] - 26.10.2023

Update of the changelog - as it is **not** required to have core 1.4.0 on production

# [2.19.0] - 26.10.2023

- Add `@statoscope/webpack-plugin` to help analyze the bundle size
- Change the way of importing `axe` to eliminate it from the production build
- Update of DS to latest version 1.48.0 and resolves issue with `ReferenceError: TextEncoder is not defined` in tests
- Change the transformer for test from `babel-jest` to `@swc/jest` to speed up tests especially on the CI
- Add example of route based code splitting
- Update the `react-qiwa-core` to v1.4.0

Changelog of core v1.4.0:

# 1.4.0

## Features:

- add `currentDir` to useLocale hook and add it to design system `WorkSpaceItem` component as dir prop
- bumps up the required DS version as peerDependency to version at least - `^1.48.0`
- add fix for internal tests of core to resolve `ReferenceError: TextEncoder is not defined` after upgrading the DS version
- add new links for sso (change-password, edit-profile)

## Improvements:

## Bugfixes:

- add `event: 'LanguageChanged'` attribute when sending the GTM event about switching the language

# [2.18.0] - 13.10.2023

Add additional instructions for using mock-server

# [2.17.0] - 12.10.2023

Remove unnecessary self-signed certificates (localhost.key, localhost.crt) and use default webpack-dev-server `server: 'https'`

# [2.16.0] - 11.10.2023

Update the `react-qiwa-core` to v1.3.9

Changelog of core v1.3.9

## Features:

## Bugfixes:

- add correct links for UAT and PROD for https://users-payments.qiwa.sa in business sidebar
- add correct links for UAT and PROD for edit profile service

## Improvements:

Changelog of core v1.3.8

## Features:

## Bugfixes:

- add correct links for Knowledge Center for production environment
- add fixes for uat links to individuals service and compliance index

## Improvements:

# [2.15.0] - 11.10.2023

Update the `react-qiwa-core` to v1.3.7

Changelog of core v1.3.7

## Features:

- update the links for stage and demo for employee-management service

## Bugfixes:

- add correct links for Knowledge Center for production environment
- add proper link for the UAT environment for notifications center api

## Improvements:

# [2.14.0] - 10.10.2023

Unify env variables for all environments

Update the `react-qiwa-core` to v1.3.6

Changelog of core v1.3.6

## Features:

- add scripts for automatic deploys of the micro-frontends (no impact on end users of core library)

## Bugfixes:

- unauthorized page button translations

## Improvements:

- unauthorized error page adjustments
- cleanup of the dead code (no impact on end users of core library)
- bump up coverage to over 80% to fulfill new sonar requirements (no impact on end users of core library)
- now the changing locale rely also on `QIWA_SIGNED_IN` cookie value if is true then SSO call for locale change will take a place

# [2.13.0] - 29.09.2023

Update the `react-qiwa-core` to v1.3.5

Changelog of core v1.3.5

## Bugfixes:

- setting language for non session based apps
- remove link from Qiwa logo in footer - now the logo is not clickable
- provide correct knowledge-center link for the business sidebar KC link at the bottom

## Improvements:

- update small bits of the SSO endpoints responses types (workspaces, company, service permissions)
- add storybook a11y plugin for automated a11y checks inside of stories (no impact on end users of core library)
- resolved high and most of major code smells from sonar reports

# [2.12.0] - 21.09.2023

Update the `react-qiwa-core` to v1.3.4

Changelog of core v1.3.4

# 1.3.4

## Features:

## Bugfixes:

- remove CORE_SKIP_SSO_LOCALE_CHANGE in favor of `withSSOCall` props
- making translations to use single source of truth for the language
- change footer links for Register new establishment, Manage home workers, Law Office

## Improvements:

- make AppProviders to take props for SSO language fetch skip
- remove fetching auth context in the Layout Skeletons. Now a `variant` must be passed as a prop, thanks to that there
  should be no unwanted auth fetch calls

# [2.11.0] - 20.09.2023

- update @takamol/qiwa-design-system lib to v1.40.1

Update the `react-qiwa-core` to v1.3.3

Changelog of core v1.3.3

# 1.3.3

## Features:

- add `type` prop to `UnifiedPortalNavigation` to display a process variant of the navigation
- add `withBackToUnifiedPortal` prop to `UnifiedPortalNavigation` to hide "Back to unified portal" link

## Bugfixes:

- fix Error Boundary page causing errors when used outside of React Router.
- fix redirection url so it will be created on function call instead of on import

## Improvements:

- update @takamol/qiwa-design-system lib to v1.40.1

# [2.10.0] - 18.09.2023

Update the `react-qiwa-core` to v1.3.2

Changelog of core v1.3.2

# 1.3.2

## Bugfixes:

- switch authSpaUrl to getAuthSpaUrl so it will get the url from the envs on call instead of import

# [2.9.0] - 15.09.2023

## Improvements

- remove unused packages:
  - flat
  - react-error-boundary
  - react-is

Update the `react-qiwa-core` to v1.3.1

Changelog of core v1.3.1

## Improvements:

- change prefix in links to `individuals` service from `individual` to `i`

# [2.8.0] - 14.09.2023

Update the `react-qiwa-core` to v1.3.0

Changelog of core v1.3.0

## Bugfixes:

- set the language based on SSO
- introduce lazy singleton evaluation for authApi service

## Improvements:

- update a minimal required version of `@takamol/qiwa-design-system` to `1.36.1`
- add labels for the social media links in the footer to improve accessibility
- remove setting `translate` attribute on the `html` tag. From now on if the service wants to disable translating the page by Google Translate it must handle it on its own
- update docs about configureAuth and add section about used environment variables

# [2.7.1]

## Bugfixes:

## Improvements:

- update README.md and add SOLUTIONS.md

# [2.7.0] - 12.09.2023

Update the `react-qiwa-core` to v1.2.1

Changelog of core v1.2.1

## Bugfixes:

- adjust AR/UR translations

## Improvements:

- update @takamol/agnostic-qiwa-core to 1.6.1

# [2.6.0] - 11.09.2023

Update the `react-qiwa-core` to v1.2.0

Changelog of core v1.1.3 and v1.1.4:

## Features:

- add new flow for Other Workspaces inside of Business Sidebar - now user is redirected to given company dashboard
- add exporting `ProcessNavigation` component

## Bugfixes:

- fix eslint issues
- fix skipping SSO change locale when passed `CORE_SKIP_SSO_LOCALE_CHANGE=true`

## Improvements:

- add a hook which will apply the 100% width instead of 100vw for all navigation components, additionally business sidebar will have 100% height instead of 100vh
- remove exporting `testQueryClient`. No `testQueryClient.clear()` is needed anymore, because a new queryClient is
  created every time the `createTestWrapper` is called. This change is for better tests isolation when run in parallel.
- add variant option for PublicFooter in order to allow use PublicFooter as process one

# [2.5.0] - 09.09.2023

Update the `react-qiwa-core` to v1.1.6

## Bugfixes:

- remove unnecessary div containers for conditional renders in DefaultIndividualsInternalNavigation
- change incorrect Arabic translation for the `Payment and users` in `BusinessSidebar`
- set the fixed width for desktop sidebar equal to exactly - `264`
- back button redirects to the workspaces page

## Improvements:

- emit the event `qiwa-core/changeWorkspace` right after SSO PATCH `changeEstablishment`
- export `getExternalUrl` and `ExternalURL` for the clients
- add error-state in the Business Sidebar Workspaces
- upgrade storybook to latest version and cleanup its msw warnings
- emit the event `qiwa-core/changeWorkspace` right after the SSO context fetch, and add id for the container
- extend i18n t method types to support injecting components inside of the translation

# [2.4.0] - 04.09.2023

Update the `react-qiwa-core` to v1.1.5

## Bugfixes:

- resolve issue with inifite loading state for `LanguageAndAccountNavigation` for individual users

# [2.3.0] - 01.09.2023

## Bugfixes:

- wrap main layout with div so the header stay sticky

Update the `react-qiwa-core` to v1.1.4
Changelog of core v1.1.3 and v1.1.4:

## Features:

- add fallbacks from session for process navigation and business sidebar for `establishment-number` display
- useAuth exports `isCompanyLoading` and `isCompanyError` flags
- add new set of URL's for the home link in the `BusinessSidebar`

## Bugfixes:

- wrap coreSkipSSOLocaleChange with function
- add missing loading state for the `LanguageAndAccountNavigation` and missing userName

## Improvements:

- add new links for EstablishmentInfo of sidebar
- add custom language switch for PublicIndividualsNavigation
- fix new links for EstablishmentInfo of sidebar
- add proper layout with fixed navbar and footer for the notifications dropdown

# [2.2.0] - 31.08.2023

Update the `react-qiwa-core` to v1.1.2
Changelog of core v1.1.2:

## Features:

- remove the href link for go back in error pages in favor of navigate back from react-router
- add new links for Employees link in the business version of the sidebar

## Bugfixes:

- add language switcher for public paths

## Improvements:

- add new optional parameter to `createAuthApiHandlerMocks` in order to enable session response mocking for Individual acount

# [2.1.0] - 30.08.2023

Update the `react-qiwa-core` to v1.1.1
Changelog of core v1.1.1:

- add `createNotificationsHandlerMocks` and `notificationCenterApiUrlMocks` for mocking the notifications-center api in mock-server of starter
  Update the `react-qiwa-core` to v1.0.1
  Changelog of core v1.0.1:

## Features:

- add accessibility theme switcher for the footer
- add new pubsub event for changing workspace and updates the @takamol/agnostic-qiwa-core" to stable 1.5.0 version
- remove the "Labor Market Reports in the Kingdom" - as it is not part of the phase 1 (31.08.2023)
- add language and account only navigation `LanguageAndAccountNavigation`
- add missing knowledge-center links in the footer and add new workspaces link
- add final changes to the new notifications component and make it default
- handle setting language prefix via url
- add the missing translations for individuals service (Bengali, Hindi, Tagalog, Urdu)
- export the `SidebarWorkspaces` components for the Individuals Internal Service

## Improvements:

- detect Urdu language as RTL
- the go back link should redirect to the workspaces on 403 page

# [2.0.2] - 30.08.2023

bring back precommit husky

# [2.0.0] - 30.08.2023

BREAKING CHANGE:

- wraping RouterProvider with ErrorBoundary and AppProvider around instead of using AppProvider inside RouterProvider, so Sentry event can be send

# [1.2.0] - 29.08.2023

Provide initial sentry integration example

# [1.1.4] - 25.08.2023

Update of `@takamol/react-qiwa-core` to v1.0.19

# [1.1.3] - 25.08.2023

Update of `@takamol/react-qiwa-core` to v1.0.18

- add missing translations for core elements in Arabic language
- add Google Tag Manager for language switching
  Update of `@takamol/qiwa-design-system` to v1.28.3

## [1.1.2] - 23.08.2023

Update of `@takamol/react-qiwa-core` to v1.0.16

## [1.1.1] - 23.08.2023

Improves ditto translations script

## [1.1.0] - 21.08.2023

Add script for ditto translations

## [1.0.12]

Add ProcessLayout with dedicated route `/example-process`
Fix navigation scrolling behavior

## [1.0.11] - 16.08.2023

Upgrade `@takamol/react-qiwa-core` to [1.0.15](https://gitlab.qiwa.tech/takamol/qiwa/infrastructure/react-qiwa-core/-/tags/v1.0.15)

## [1.0.10] - 14.08.2023

Upgrade `@takamol/react-qiwa-core` to [1.0.14](https://gitlab.qiwa.tech/takamol/qiwa/infrastructure/react-qiwa-core/-/tags/v1.0.14)

## [1.0.9] - 08.08.2023

Upgrade `@takamol/react-qiwa-core` to [1.0.10](https://gitlab.qiwa.tech/takamol/qiwa/infrastructure/react-qiwa-core/-/tags/v1.0.10)
Add big refactor of the routing, currently it uses the createBrowserRouter and createRoutesFromElements apis, so it will be easier to add Sentry later on
Upgrade `@takamol/qiwa-design-system` to [1.21.0](https://qiwa-design-system.qiwa.info/?path=/docs/changelog--page)
Add example for Individual available on public route `/example-individual-public-page`
Add example layout for the individuals outside of the individuals portal
Add workspaces segment to business variant of the Sidebar

## [1.0.8] - 01.08.2023

Upgrade `@takamol/react-qiwa-core` to [1.0.9](https://gitlab.qiwa.tech/takamol/qiwa/infrastructure/react-qiwa-core/-/tags/v1.0.9)
Upgrade `@takamol/qiwa-design-system` to [1.20.0](https://qiwa-design-system.qiwa.info/?path=/docs/changelog--page)
New examples for PublicRoutes and UnifiedPortal Layout
RouterProvider is now part of the core library

## [1.0.7] - 25.07.2023

Upgrade `@takamol/react-qiwa-core` to [1.0.8](https://gitlab.qiwa.tech/takamol/qiwa/infrastructure/react-qiwa-core/-/tags/v1.0.8)
Upgrade `@takamol/qiwa-design-system` to [1.19.0](https://qiwa-design-system.qiwa.info/?path=/docs/changelog--page)
Add basic changelog with backwards compatibility
`MainNavigation` was changed to `BusinessNavigation` in `src/app/shared/components/Layout/Layout.tsx`
`useDrawerVisiblity` was renamed to `useDrawerVisiblity` in `src/app/shared/components/Layout/Layout.tsx`
entire logic `isAuthLoading` was removed in `src/app/shared/components/Layout/Layout.tsx` since it was duplicated with layout components which handles the skeletons out of the box

## [1.0.6] - 30.06.2023

Improve the descriptions for the generator:
https://employeesgate.atlassian.net/browse/RSCC-274

## [1.0.5] - 27.06.2023

Remove the types for the old React Router version:
https://employeesgate.atlassian.net/browse/RSCC-266

## [1.0.4] - 21.06.2023

Fix unit testing - add babel config
https://employeesgate.atlassian.net/browse/RSCC-249

## [1.0.3] - 19.06.2023

Resolve issues with the plop generation: https://employeesgate.atlassian.net/browse/RSCC-229
