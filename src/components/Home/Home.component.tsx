import content from '../../content';
import { Container } from '../../App.styled';
import { Header } from '../Header';
import { Card } from '../Card';
import { Footer } from '../Footer';

export const Home = () => {
  return (
    <>
      <Header/>
      <Container>
        {content.map((item)=>{
          return <Card key={item.id} item={item}></Card>
        })}
      </Container>
      <Footer/>
    </>
  )
}
