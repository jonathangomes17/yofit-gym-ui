import React, { useEffect, useState } from 'react'
import GymContainer from './styles'
import MasonryCard from './MasonryCard'
import Typhography from '../../../components/Typhography'
import { getListTrainingsAvaliableByUserId } from '../../../api'
import NoAvaliableTrainings from '../../../components/MessageBoxPinned/NoAvaliableTrainings'

export interface ITrainingItem {
  training_name: string;
  training_uuid: string;
}

const AvaliableTraining = () => {
  const [avaliableTrainings, setAvaliableTranings] = useState<ITrainingItem[]>([]);

  useEffect(() => {
    (async function searcherTrainings() {
      const trainings: any = await getListTrainingsAvaliableByUserId();
      setAvaliableTranings(trainings);
    })();
  }, []);

  return (
    <GymContainer>
        <Typhography bottom>Treinos disponíveis</Typhography>

        {avaliableTrainings?.length === 0
          ? <NoAvaliableTrainings />
          : <MasonryCard trainings={avaliableTrainings} />
        }
    </GymContainer>
  )
}

export default AvaliableTraining
