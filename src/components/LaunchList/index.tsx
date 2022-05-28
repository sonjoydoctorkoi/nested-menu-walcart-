import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query CategoryList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;