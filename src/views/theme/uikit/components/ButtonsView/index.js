import React from 'react';
import Page from '~/components/theme/Page';
import TextButtons from './TextButtons';
import IconButtons from './IconButtons';
import ButtonGroups from './ButtonGroups';
import ToggleButtons from './ToggleButtons';
import { PATH_APP } from '~/routes/paths';
import OutlinedButtons from './OutlinedButtons';
import ContainedButtons from './ContainedButtons';
import FloatingActionButton from './FloatingActionButton';
import HeaderDashboard from '~/components/theme/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardHeader, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(3)
  }
}));

function ButtonsView() {
  const classes = useStyles();

  return (
    <Page title="Components | Buttons" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Buttons"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Buttons' }
          ]}
          moreLink={[
            'https://next.material-ui.com/components/theme/buttons',
            'https://next.material-ui.com/components/theme/button-group',
            'https://next.material-ui.com/components/theme/floating-action-button',
            'https://next.material-ui.com/components/theme/toggle-button'
          ]}
        />

        <Card className={classes.margin}>
          <CardHeader title="Contained Buttons" />
          <CardContent>
            <ContainedButtons />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Outlined Buttons" />
          <CardContent>
            <OutlinedButtons />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Text Buttons" />
          <CardContent>
            <TextButtons />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Icon Buttons" />
          <CardContent>
            <IconButtons />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Floating Action Button" />
          <CardContent>
            <FloatingActionButton />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Button Group" />
          <CardContent>
            <ButtonGroups />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Toggle Buttons" />
          <CardContent>
            <ToggleButtons />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default ButtonsView;
