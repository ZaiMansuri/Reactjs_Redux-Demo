import { renderComponent , expect } from '../test_helper';
import Main from '../../components/main';

describe('Main' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Main);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
