import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { Issue } from '../interfaces';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IssueItemProps {
  issue: Issue;
}

export const IssueItem: FC<IssueItemProps> = ({ issue }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
    >
      <div className="card-body d-flex align-items-center">
        <div className="icon-container">
          {issue.state === 'open' ? (
            <FiInfo size={30} color="red" />
          ) : (
            <FiCheckCircle size={30} color="green" />
          )}
        </div>

        <div className="d-flex flex-column flex-fill px-2">
          <p className="multiline-ellipsis">{issue.title}</p>
          <span className="issue-subinfo">
            {issue.number} opened {issue.created_at} by
            <span className="fw-bold">{` ${issue.user.login}`}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
