import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import articles from "./dummydata/articles.js";
    import {render, screen, fireEvent} from "@testing-library/react";
    import Moderate from './pages/Moderate-Article'
    import Dropdown from "./components/Dropdown.js";
    import AnalystForm from './components/AnalystForm';

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    describe('Articles id', () => {
      it('checks article id', () => {
        expect(articles[0].id).toEqual("1");
      });
    });

    describe('Articles authors', () => {
      it('checks article authors', () => {
        expect(articles[1].authors).toEqual("Munir, H., Wnuk, K., Petersen, K., Moayyed, M.");
      });
    });

    describe('Articles title', () => {
      it('checks article title', () => {
        expect(articles[2].title).toEqual("Realizing quality improvement through test driven development: results and experiences of four industrial teams");
      });
    });

    describe('Articles pubyear', () => {
      it('checks article publication year', () => {
        expect(articles[3].pubyear).toEqual("2008");
      });
    });
    
    describe('Articles source', () => {
      it('checks article source', () => {
        expect(articles[3].source).toEqual("Software, IEEE, 25(2) 77-84");
      });
    });

    describe('Articles DOI', () => {
      it('checks article DOI', () => {
        expect(articles[4].doi).toEqual("https://doi.org/10.1109/esem.2007.35");
      });
    });

    describe('Moderation form', () => {
      it("renders the correct content", () => {
        const {getByText} = render(<Moderate />);

        getByText("Moderate Article");
        getByText("This will be a form to allow moderators to accept or reject a submission.")
      });
    });

    describe('Dropdown TDD', () => {
      it("select TDD in dropdown", () => {
        render(<Dropdown />);
        expect(screen.getByText("Select an SE Practice")).toBeInTheDocument();
        const input = screen.getByText("TDD");
        fireEvent.click(input);
        expect(input.textContent).toEqual("TDD");
      });
    });

    describe('Dropdown Mob-Programming', () => {
      it("select Mob-Programming in dropdown", () => {
        render(<Dropdown />);
        expect(screen.getByText("Select an SE Practice")).toBeInTheDocument();
        const input = screen.getByText("Mob-Programming");
        fireEvent.click(input);
        expect(input.textContent).toEqual("Mob-Programming");
      });
    });

    describe('Analyst extract', () => {
      it("select claim", () => {
        render(<AnalystForm />);
        expect(screen.getByText("Select Claim")).toBeInTheDocument();
        const input = screen.getByText("Code Quality Improvement");
        fireEvent.click(input);
        expect(input.textContent).toEqual("Code Quality Improvement");
      });
    });



    

    

    
