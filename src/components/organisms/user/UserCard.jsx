import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img height={160} width={160} alt={user.name} src={user.image} />
      <p>{user.name}</p>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
`;
