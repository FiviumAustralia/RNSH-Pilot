import React, {Component} from 'react';
import { Select, TextInput } from './widgets';
import { FormattedDate } from 'react-intl';
import Panel from './Panel';
import styles from './RTDetail.scss';

export default class RTDetail extends Component {

  render () {
    if (this.props.RTDetailViewId) {
      return (
        <Panel title='Radiotherapy Treatement Period'>
          <div className={styles['rt-timeframe']}>
            from <FormattedDate
              value={Date(this.props.data.start)}
              day='numeric'
              month='short'
              year='numeric'
            /> &nbsp;
            to <FormattedDate
              value={Date(this.props.data.end)}
              day='numeric'
              month='short'
              year='numeric'
            />
          </div>
          <TextInput
            ref='rtDose'
            label='Dose'
            type='text'
            defaultValue={this.props.data.dose}
            className={styles['rt-field-general']}
            />
          <TextInput
            ref='rtFraction'
            label='Fraction'
            type='text'
            defaultValue={this.props.data.fractions}
            className={styles['rt-field-general']}
            />
            <Select
              ref='rtLocalisation'
              label='Localisation'
              className={styles['rt-field-general']}
              options={[
                {key: 'Bony', value: 'Bony'},
                {key: 'NA', value: 'NA'},
              ]}
            />
            <Select
              ref='rtLN'
              label='Lymph nodes treated?'
              className={styles['rt-field-general']}
              options={[
                {key: 'Yes', value: 'Y'},
                {key: 'No', value: 'N'},
              ]}
              />
          </Panel>
      );
    } else {
      return (
        <h3>Select a radiotherapy treatment period.</h3>
      );
    }
  };
};

RTDetail.propTypes = {
  data: React.PropTypes.object,
  RTDetailViewId: React.PropTypes.number
};
