import * as React from 'react';
import type * as ReactQiwaCore from '@takamol/react-qiwa-core';

jest.mock('@takamol/react-qiwa-core', () => {
  const MockedPublicIndividualsNavigation = () => <div>microfrontend PublicIndividualsNavigation</div>;

  const MockedUnifiedPortalNavigation = () => <div>microfrontend UnifiedPortalNavigation</div>;

  const MockedBusinessNavigation = () => <div>microfrontend BusinessNavigation</div>;

  const MockedPublicBusinessNavigation = () => <div>microfrontend PublicBusinessNavigation</div>;

  const MockedIndividualsNavigation = () => <div>microfrontend IndividualsNavigation</div>;

  const MockedIndividualsInternalNavigation = () => <div>microfrontend IndividualsInternalNavigation</div>;

  const MockedProcessNavigation = () => <div>microfrontend ProcessNavigation</div>;

  const MockedLanguageAndAccountNavigation = () => <div>microfrontend LanguageAndAccountNavigation</div>;

  const MockedSidebarWorkspaces = () => <div>microfrontend SidebarWorkspaces</div>;

  const MockedSidebar = () => <div>microfrontend Sidebar</div>;

  const MockedIndividualsInternalSidebar = () => <div>microfrontend IndividualsInternalSidebar</div>;

  const MockedLawOfficeSidebar = () => <div>microfrontend LawOfficeSidebar</div>;

  const MockedPublicFooter = () => <div>microfrontend PublicFooter</div>;

  const MockedFooter = () => <div>microfrontend Footer</div>;

  const MockedProcessLayout = () => <div>microfrontend ProcessLayout</div>;

  const MockedLayout = () => <div>microfrontend Layout</div>;

  return {
    ...jest.requireActual<typeof ReactQiwaCore>('@takamol/react-qiwa-core'),
    __esModule: true,
    PublicIndividualsNavigation: MockedPublicIndividualsNavigation,
    UnifiedPortalNavigation: MockedUnifiedPortalNavigation,
    BusinessNavigation: MockedBusinessNavigation,
    PublicBusinessNavigation: MockedPublicBusinessNavigation,
    IndividualsNavigation: MockedIndividualsNavigation,
    IndividualsInternalNavigation: MockedIndividualsInternalNavigation,
    ProcessNavigation: MockedProcessNavigation,
    LanguageAndAccountNavigation: MockedLanguageAndAccountNavigation,
    SidebarWorkspaces: MockedSidebarWorkspaces,
    Sidebar: MockedSidebar,
    IndividualsInternalSidebar: MockedIndividualsInternalSidebar,
    LawOfficeSidebar: MockedLawOfficeSidebar,
    PublicFooter: MockedPublicFooter,
    Footer: MockedFooter,
    ProcessLayout: MockedProcessLayout,
    Layout: MockedLayout,
  };
});
