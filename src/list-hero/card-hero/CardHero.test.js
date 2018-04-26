import CardHero from "./CardHero";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardHero />, div);
    ReactDOM.unmountComponentAtNode(div);
});