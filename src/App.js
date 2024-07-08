import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutMe } from "./pages/about-me";
import { Home } from "./pages/home";
import { Nav } from "./pages/shared/nav";
import { Footer } from "./pages/shared/footer";
import { Works } from "./pages/works";
import { Container } from "./shared/container";

const App = () => {
   return (
      <BrowserRouter>
         <Container>
            <div className="my-16 md:my-24">
               <Nav />
               <Switch>
                  <Route path="/" exact>
                     <Home />
                  </Route>
                  <Route path="/about-me">
                     <AboutMe />
                  </Route>
                  <Route path="/works">
                     <Works />
                  </Route>
               </Switch>
               <Footer />
            </div>
         </Container>
      </BrowserRouter>
   );
};

export default App;
