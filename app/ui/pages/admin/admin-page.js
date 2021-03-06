import React from 'react';
import { injectIntl } from 'react-intl';
import { compose, setDisplayName } from 'recompose';
import AuthPageLayout from '/app/ui/layouts/auth-page';
import Localised from '/app/ui/components/smart/localised';
import { withSEO, withGlobalContextProps } from '/app/ui/hocs';

const InnerAdmin = ({ intl: { formatMessage: t }, curUser }) => (
  <AuthPageLayout
    key="view"
    title={t({ id: 'adminTitle' })}
  >
    <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
      {JSON.stringify(curUser, null, 2)}
    </pre>
  </AuthPageLayout>
);

const WrappedInnerAdmin = compose(
  injectIntl,
  withGlobalContextProps,
  withSEO({ title: 'adminHTMLTitle' }),
  setDisplayName('AdminPage'),
)(InnerAdmin);

const LocalisedAdminPage = props => (
  <Localised section="admin"><WrappedInnerAdmin {...props} /></Localised>
);

export default LocalisedAdminPage;
