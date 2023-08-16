import { StyledHeader, Nav, Logo, Image } from "./Header.styled"
import { Button, Container, Flex } from "../../App.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="../../../public/images/logo.svg" alt=""></Logo>
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="../../../public/images/illustration-mockups.svg"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
