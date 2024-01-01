import {gql} from '@apollo/client';

export const GET_ALL_REPORT_WITH_MARK = gql`
  query GetAllReportDetailListWithMarkStatus($mark: ReportStatus!) {
    getAllReportDetailListWithMarkStatus(mark: $mark) {
      id
      title
      message
      createdAt
      updatedAt
      reportAccount {
        mark
      }
    }
  }
`;

export const CHANGE_MARK_STATUS_REPORT = gql`
  mutation Mutation($reportAccountId: ID!, $mark: ReportStatus) {
    changeMarkStatus(reportAccountId: $reportAccountId, mark: $mark)
  }
`;
