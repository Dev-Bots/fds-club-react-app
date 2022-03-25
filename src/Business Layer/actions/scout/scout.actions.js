// GET ALL SCOUTS (FOR LIST)
const scoutsLoading = () => {
    return { type: scoutActionTypes.SCOUTS_LOADING }
}

const scoutsLoaded = (scouts) => ({
    type: scoutActionTypes.SCOUTS_LOADED,
    payload: scouts,
})

const scoutsLoadingError = (errorMessage) => ({
    type: scoutActionTypes.SCOUTS_LOADING_ERROR,
    payload: errorMessage,
})


// GET AN SCOUT (FOR DETAILS)
const scoutLoading = () => {
    return { type: scoutActionTypes.SCOUT_LOADING }
}

const scoutLoaded = (scout) => ({
    type: scoutActionTypes.SCOUT_LOADED,
    payload: scout,
})

const scoutLoadingError = (errorMessage) => ({
    type: scoutActionTypes.SCOUT_LOADING_ERROR,
    payload: errorMessage,
})


// ADD A SCOUT 
const scoutAdding = () => {
    return { type: scoutActionTypes.SCOUT_ADDING }
}

const scoutAdded = (scout) => ({
    type: scoutActionTypes.SCOUT_ADDED,
    payload: scout,
})

const scoutAddError = (errorMessage) => ({
    type: scoutActionTypes.SCOUT_ADD_ERROR,
    payload: errorMessage,
})

// UPDATE AN SCOUT 
const scoutUpdating = () => {
    return { type: scoutActionTypes.SCOUT_UPDATNG }
}

const scoutUpdated = (scout) => ({
    type: scoutActionTypes.SCOUT_UPDATED,
    payload: scout,
})

const scoutUpdateError = (errorMessage) => ({
    type: scoutActionTypes.SCOUT_UPDATE_ERROR,
    payload: errorMessage,
})


// DELETE AN SCOUT 
const scoutDeleting = () => {
    return { type: scoutActionTypes.SCOUT_DELETING }
}

const scoutDeleted = (scout) => ({
    type: scoutActionTypes.SCOUT_DELETED,
    payload: scout,
})

const scoutDeleteError = (errorMessage) => ({
    type: scoutActionTypes.SCOUT_DELETE_ERROR,
    payload: errorMessage,
})
