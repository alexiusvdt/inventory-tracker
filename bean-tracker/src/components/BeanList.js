import React from "react";
import Bean from "./Bean";
import PropTypes from "prop-types";

const editStyle = {
  backgroundColor: '#808080',
  display: 'flex',
  fontFamily: 'monospace',
  outlineStyle: 'outset',
  outlineColor: 'black',
  outlineWidth: 2,
  justifyContent: "space-around"
}

function BeanList(props){
  return (
    <React.Fragment>
      <hr/>
        <div style={editStyle}>{props.beanList.map((bean) => 
          <Bean 
            whenBeanClicked = {props.onNewBeanSelection}
            name={bean.name}
            origin={bean.origin}
            roast={bean.roast}
            price={bean.price}
            stock={bean.stock}
            sold={bean.sold}
            id={bean.id}
            key={bean.id} />
        )}
        </div>
    </React.Fragment>
  );
}

BeanList.propTypes = {
  beanList: PropTypes.array,
  onNewBeanSelection: PropTypes.func,

  
}

export default BeanList;