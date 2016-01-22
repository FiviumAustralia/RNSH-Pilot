import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowUpDiagnosis from 'components/FollowUpDiagnosis';
import FollowUpIntent from 'components/FollowUpIntent';
import FollowUpPreRTAssessment from 'components/FollowUpPreRTAssessment';
import FollowUpStatus from 'components/FollowUpStatus';
import FollowUpFollowUp from 'components/FollowUpFollowUp';
import Panel from 'components/Panel';
import MultiGraph from 'components/MultiGraph';
import styles from './FollowUpView.scss';

const mapStateToProps = (state) => ({
  graphs: state.graphs
});

export class FollowUpView extends Component {
  render () {
    return (
      <div>
        <div className={styles['fuv-container-table']}>

          <div className={styles['fuv-row-one']}>
            <div className={styles['fuv-diagnosis-container']}>
              <FollowUpDiagnosis />
            </div>
            <div className={styles['fuv-intent-status-container']}>
              <div className={styles['fuv-intent-container']}>
                <FollowUpIntent />
              </div>
              <div className={styles['fuv-status-container']}>
                <FollowUpStatus />
              </div>
            </div>
            <div className={styles['fuv-graph-container']}>
              <Panel>
                <MultiGraph graphs={this.props.graphs} />
              </Panel>
            </div>
          </div>
        </div>

        <div className={styles['fuv-row-two']}>
          <div className={styles['fuv-prertassess-container']}>
            <FollowUpPreRTAssessment />
          </div>
        </div>

        <div className={styles['fuv-row-three']}>
          <div className={styles['fuv-followup-container']}>
            <FollowUpFollowUp />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(FollowUpView);

FollowUpView.propTypes = {
  graphs: React.PropTypes.array
};
