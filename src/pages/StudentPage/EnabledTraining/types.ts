interface IActivity {
  activity_uuid: string;
  activity_name: string;
  activity_training_sections: number;
  status: string;
}
  
interface IEnabledTraining {
  student_training_uuid: string;
  training_uuid: string;
  training_name: string;
  activities: IActivity[]
}

export default IEnabledTraining

export type { IActivity }
