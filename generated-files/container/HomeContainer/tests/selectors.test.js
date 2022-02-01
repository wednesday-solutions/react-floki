import { selectHomeContainer } from '../selectors';

describe('HomeContainer selector tests', () => {
  let mockedState;

  beforeEach(() => {
    mockedState = {
      homeContainer: {},
    };
  });

  it('should select the user state', () => {
    const homeContainerSelector = selectHomeContainer();
    expect(homeContainerSelector(mockedState)).toEqual(
      mockedState.homeContainer,
    );
  });
});
