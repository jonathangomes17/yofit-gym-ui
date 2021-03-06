import React, { useEffect, useState } from 'react'
import { getOtherTrainings, patchChangeStatusStudentTraining } from '../../../services/api';
import Button from '../../../components/Button'
import NoOtherTrainings from '../../../components/MessageBoxPinned/NoOtherTrainings';
import Typhography from '../../../components/Typhography'
import OtherTrainingsContainer from './styles';

export interface IOtherTraining {
  student_training_uuid: string;
  training_name: string;
}

const OtherTrainings = () => {
  const [otherTrainings, setOtherTrainings] = useState<IOtherTraining[]>();

  useEffect(() => {
    (async function searcherTrainings() {
      const trainings: any = await getOtherTrainings();
      setOtherTrainings(trainings);
    })();
  }, []);

  const handleEnableTraining = async (e: HTMLButtonElement) => {
    //@ts-ignore
    const uuid = e.currentTarget.getAttribute('data-uuid');

    await patchChangeStatusStudentTraining(uuid);
    window.location.href = '';
  }
  
  const listOtherTrainings = () => otherTrainings?.map((training: IOtherTraining, index: number) =>
    <div key={index} style={{border: '1px solid #EEEEEE', padding: '.5rem 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <span>{training.training_name}</span>
      
      <span style={{width: '100'}}>
        <Button primary onClick={handleEnableTraining} data-uuid={training.student_training_uuid}>Fazer</Button>
      </span>
    </div>
  );

  return (
    <OtherTrainingsContainer>
      <Typhography> Demais treinos </Typhography>

      {!otherTrainings
        ? <NoOtherTrainings />
        : (
          <>
            <div style={{'display': 'flex', flexDirection: 'column', marginTop: '1rem', overflowY: 'auto', maxHeight: '200px'}}>
              {listOtherTrainings()}
            </div>
          </>
        )
      }
    </OtherTrainingsContainer>
  )
}

export default OtherTrainings
