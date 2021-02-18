const PUBLISH_POINTS = 'publish_points';

export const publish_points = (givenPoints) => ({
  type: PUBLISH_POINTS,
  pointsData: givenPoints,
});

const initialState = {
  pointsData: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case PUBLISH_POINTS:
      return {...state, pointsData: action.pointsData};
    default:
      return state;
  }
}