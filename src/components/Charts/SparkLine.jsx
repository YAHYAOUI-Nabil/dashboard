import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'



class SparkLine extends React.Component {
  render() {
    const { data } = this.props;

    if(data){
      return (
      
      <SparklineComponent
        id='sparkline'
        height='80px'
        width='250px'
        dataSource={data}
        xName="x"
        yName="yval"
      > 
      </SparklineComponent>
      
    )}else{
      return null
    }
    
  }
}

export default SparkLine