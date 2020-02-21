import styled from 'styled-components';

const CheckBoard = styled.div`
  background:
    linear-gradient(45deg, rgba(230, 192, 67, 0.5) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(230, 192, 67, 0.5) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(230, 192, 67, 0.5) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(230, 192, 67, 0.5) 75%);
  background-size: 180px 180px;
  background-position: 0 0, 0 90px, 90px -90px, -90px 0;
`;

export default CheckBoard;
