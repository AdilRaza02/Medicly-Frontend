import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Block from '~/components/theme/Block';
import { TextField } from '@material-ui/core';
import {
  DateTimePicker,
  MobileDateTimePicker,
  DesktopDateTimePicker
} from '@material-ui/lab';

// ----------------------------------------------------------------------

function PickerDateTime() {
  const [value, setValue] = useState(new Date());
  const [valueResponsive, setValueResponsive] = useState(
    new Date('2018-01-01T00:00:00.000Z')
  );

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Block title="Basic">
          <DateTimePicker
            renderInput={props => <TextField {...props} fullWidth />}
            label="DateTimePicker"
            value={value}
            onChange={setValue}
          />
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Responsiveness">
          <MobileDateTimePicker
            value={valueResponsive}
            onChange={newValue => {
              setValueResponsive(newValue);
            }}
            renderInput={params => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
          <DesktopDateTimePicker
            value={valueResponsive}
            onChange={newValue => {
              setValueResponsive(newValue);
            }}
            renderInput={params => (
              <TextField {...params} margin="normal" fullWidth />
            )}
          />
          <DateTimePicker
            renderInput={params => (
              <TextField {...params} margin="normal" fullWidth />
            )}
            value={valueResponsive}
            onChange={newValue => {
              setValueResponsive(newValue);
            }}
          />
        </Block>
      </Grid>
    </Grid>
  );
}

export default PickerDateTime;
