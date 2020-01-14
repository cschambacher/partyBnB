import { RECEIVE_SPOT_REVIEWS, RECEIVE_NEW_REVIEW} from '../actions/review_actions'


const initalState = {

    1: {
        user: 'Paul',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."

    },
    2: {
        user: 'Nick',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."

    },
    4: {
        user: 'Corina',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."

    },

    5: {
        user: 'Spongebob',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."

    },

    6: {
        user: 'Squidward',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."

    },

    7: {
        user: 'Bye',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."
    },

    8: {
        user: 'HI',
        spot: "best hotel",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, an mel detracto vulputate, choro consectetuer eu mea. Quo minim iriure cu. Vel salutandi gubergren ad, in blandit gloriatur eos. Sea et quot magna. Eum fierent albucius officiis no, et virtute epicuri vis. Has saperet consectetuer ut, eu deleniti verterem temporibus cum, id eum rebum comprehensam."

    }
}

const reviewReducer = (state = initalState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOT_REVIEWS:
           return Object.assign({}, state, action.spotReviews.data)
        // case RECEIVE_NEW_REVIEW:
        //     return Object.assign({}, state, action.newReview.data)   
        default:
           return state;
    }
}

export default reviewReducer


