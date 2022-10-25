import React from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_LOADING":
            return{
                ...state,
                isLoading: true,
            };

        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payLoad.hits,
                nbPages: action.payLoad.nbPages,
            };
        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter((curElem) => curElem.objectID != action.payLoad),
            };
        case "SEARCH_QUERY":
            return{
                ...state,
                query: action.payLoad,
            };
        
        case "NEXT_PAGE":
            let pageNumInc = state.page + 1;

            if(pageNumInc >= state.nbPages) {
                pageNumInc = 0;
            }

            return{
                ...state,
                page: pageNumInc,
            };

        case "PREV_PAGE":
            let pageNum = state.page - 1;

            if(pageNum <= 0) {
                pageNum = 0;
            }

            return{
                ...state,
                page: pageNum,
            };

    }
  return state;
}

export default reducer