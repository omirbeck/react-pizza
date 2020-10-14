import React, { useState } from 'react';
import propTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
)

Categories.propTypes = {
    activeCategory: propTypes.oneOfType([propTypes.number, null]),
    items: propTypes.arrayOf(propTypes.string).isRequired,
    onClickCategory: propTypes.func
};

Categories.defaultProps = {
    activeCategory: null,
    items: []
}

export default Categories;