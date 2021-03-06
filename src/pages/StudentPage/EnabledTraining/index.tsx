import React, { useEffect, useState } from 'react'
import { getEnabledTrainingByUserId, patchChangeStatusStudentTrainingProgress, postStudentTrainingProgress } from '../../../services/api';
import NoEnabledTraining from '../../../components/MessageBoxPinned/NoEnabledTraining';
import Typhography from '../../../components/Typhography'
import TrainingContainer from './styles'
import IEnabledTraining, { IActivity } from './types';
import Badge from 'components/Badge';
import {ReactComponent as ArrowLeft} from '../../../assets/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../../assets/arrow-right.svg'

const EnabledTraining = () => {
  const [enabledTraining, setEnabledTraining] = useState<IEnabledTraining>();
  const [activity, setActivity] = useState<IActivity>();
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    (async function searcherTraining() {
      const training: any = await getEnabledTrainingByUserId();
      
      setEnabledTraining(training);

      if (training?.activities?.length > 0) {
        setActivity(training.activities[0]);
      }
    })();
  }, []);

  const onStatusChanged = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    event.persist();
    const { value } = event.target;

    const statusCurrent = activity?.status;

    // @ts-ignore
    let newActivity: IActivity = {...activity, ...{status: value}};
    setActivity(newActivity);
 
    if (!statusCurrent) {
      // @ts-ignore
      await postStudentTrainingProgress(enabledTraining?.student_training_uuid, activity?.activity_uuid);
    }

    // @ts-ignore
    await patchChangeStatusStudentTrainingProgress(enabledTraining?.student_training_uuid, activity?.activity_uuid, value);
  }

  const onPriorActivity = () => {
    const priorIndex = activityIndex -1;
    const totalActivities = enabledTraining?.activities.length;
    
    setActivityIndex(
      // @ts-ignore
      priorIndex === -1 ? (totalActivities - 1) : activityIndex -1
    );

    setActivity(enabledTraining?.activities[activityIndex]);
  }

  const onNextActivity = () => {
    const nextIndex = activityIndex + 1;
    const totalActivities = enabledTraining?.activities.length;

    setActivityIndex(
      nextIndex === totalActivities ? 0 : activityIndex + 1
    );

    setActivity(enabledTraining?.activities[activityIndex]);
  }

  return (
    <TrainingContainer>
        <Typhography bottom>Treino atual</Typhography>
        
        {!enabledTraining
          ? <NoEnabledTraining />
          : (
            <>
              <span className='training'> 
                {enabledTraining?.training_name} 
              </span>
              
              <hr className='divider' style={{marginTop: '1rem', marginBottom: '1rem'}} />

              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typhography bottom> Excercício </Typhography>
                
                <div>
                  <span onClick={onPriorActivity} style={{cursor: 'pointer'}}>
                    <ArrowLeft width="30px" height="30px" />
                  </span>
                  {' '}
                  <span onClick={onNextActivity} style={{cursor: 'pointer'}}>
                    <ArrowRight width="30px" height="30px" />
                  </span>
                </div>
              </div>

              <div style={{display: 'flex'}}>
                <Badge primary> {activity?.activity_training_sections || 0} Seções </Badge>
                <Badge primary> {activity?.activity_training_sections || 0} Repetições </Badge>
              </div>  

              <span className='activity'>{activity?.activity_name}</span>

              <hr className='divider' style={{marginTop: '1rem', marginBottom: '1rem'}} />

              <div className='actions'>
                  <input type="radio" name="status" value="NOT_STARTED" checked={activity?.status === 'NOT_STARTED'} onChange={onStatusChanged} />
                  Não iniciei

                  <input type="radio" name="status" value="IN_PROGRESS" checked={activity?.status === 'IN_PROGRESS'} onChange={onStatusChanged} />
                  Fazendo

                  <input type="radio" name="status" value="COMPLETED" checked={activity?.status === 'COMPLETED'} onChange={onStatusChanged} />
                  Ok

                  <input type="radio" name="status" value="SKIPPED" checked={activity?.status === 'SKIPPED'} onChange={onStatusChanged} />
                  Pulo
              </div>

              <hr className='divider' style={{marginTop: '1rem', marginBottom: '1rem'}} />
            </>
          )}
    </TrainingContainer>
  )
}

export default EnabledTraining
