const initialState = {
    city: null,
    unit: {
        value: 'metric',
        visualValue: 'C'
    }
};

export default function userSettings(state = initialState, action) {
    switch (action.type) {
        case 'SET_CITY':
            return {
                ...state,
               city: action.city
            };
        case 'SET_UNIT':
            return {
                ...state,
                unit: action.unit
            };
        default:
            return state;
    }
}