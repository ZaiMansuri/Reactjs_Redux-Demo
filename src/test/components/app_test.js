import { renderComponent , expect } from '../test_helper';
import App from '../../src/animation/components/Ani';

describe('Ani' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
