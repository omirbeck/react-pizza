const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
};

const getTotalPrice = arr => arr.reduce((countPrice, obj) => countPrice + obj.price, 0);

const cart = (state = initialState, action) => {
  const getItemsCountPrice = (currentPizzaItems) => {
    const newItems = {
      ...state.items,
      [action.payload.id]: {
        items: currentPizzaItems,
        totalPrice: getTotalPrice(currentPizzaItems)
      }
    }

    const items = Object.values(newItems).map(obj => obj.items)
    const allPizzas = [].concat(...Object.values(items));
    const totalPrice = getTotalPrice(allPizzas);
    const totalCount = allPizzas.length;

    return {
      newItems,
      totalCount,
      totalPrice
    }
  }

  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload]

      const newState = getItemsCountPrice(currentPizzaItems);


      return {
        ...state,
        items: newState.newItems,
        totalCount: newState.totalCount,
        totalPrice: newState.totalPrice
      }
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0
      }
    }

    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        }
      }

      const items = Object.values(newItems).map(obj => obj.items)
      const allPizzas = [].concat(...Object.values(items));
      const totalPrice = getTotalPrice(allPizzas);
      const totalCount = allPizzas.length;

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems = oldItems.length > 1 ? [...state.items[action.payload].items].slice(1) : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        }
      }

      const items = Object.values(newItems).map(obj => obj.items)
      const allPizzas = [].concat(...Object.values(items));
      const totalPrice = getTotalPrice(allPizzas);
      const totalCount = allPizzas.length;

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }

    case 'REMOVE_CLEAR_ITEM': {
      const newItems = {
        ...state.items
      }

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }
    }

    default:
      return state;
  }
}

export default cart;