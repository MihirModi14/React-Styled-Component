import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 30px;

  ul {
    list-style-type: none;
    text-align: center;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    margin-top: 30px;
    text-align: center;
  }

  img {
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`