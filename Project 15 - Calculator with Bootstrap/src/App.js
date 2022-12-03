import React, { useReducer, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"


function App() {

  const [bigNumber, setBigNumber] = useState([])
  const [smallNumber, setSmallNumber] = useState([])
  const [state, dispatch] = useReducer(reducer, bigNumber)

  function reducer(state, action) {
    switch (action.type) {
      case "number":
        handleNumber(action.value)
        break
      case "result":
        calculateResult()
        break
      case "operation":
        handleOperation(action.value)
        break
      case "del":
        deleteLast()
        break
      case "CE":
        handleCE()
        break
      case "C":
        handleC()
        break
      default:
        console.log("ass")
    }
  }

  function deleteLast() {
    setBigNumber(prev => {
      return prev.slice(0, -1)
    })
  }

  function handleNumber(number) {
    setBigNumber(prev => {
      if (typeof number != "number") return
      return [...prev, number]
    })
  }

  function handleCE() {
    setSmallNumber([])
    setBigNumber([])
  }

  function handleC() {
    setBigNumber([])
  }

  function handleOperation(which) {
    setSmallNumber((prev) => {
      if (typeof bigNumber[0] != "number") return
      return [...bigNumber, which]
    })
    setBigNumber([])
  }


  function calculateResult() {
    const operand = smallNumber[smallNumber.length - 1]
    const num = smallNumber.slice(0, -1)
    const firstNum = Number(num.join(""))
    const secNum = Number(bigNumber.join(""))
    switch (operand) {
      case "*":
        setBigNumber([firstNum * secNum])
        setSmallNumber([])
        break;
      case "-":
        setBigNumber([firstNum - secNum])
        setSmallNumber([])
        break;
      case "+":
        setBigNumber([firstNum + secNum])
        setSmallNumber([])
        break;
      case "/":
        setBigNumber([firstNum / secNum])
        setSmallNumber([])
        break;
      default:
        console.log("none")
    }
  }


  return (
    <Container style={{ height: "100vh" }}>
      <Row className="py-5" >
        <Col className=" col-2  col-lg-4 " ></Col>
        <Col className=" col-lg-4  col-8 align-items-center" >
          <Card className="border-dark bg-dark mx-auto p-1" style={{ height: "450px", width: "300px" }} >
            <div style={{ width: "100%", height: "120px" }} className="border border-dark px-1 text-end rounded-2 bg-light">
              <h3 className="fw-light" >{smallNumber}</h3>
              <h1 className="fw-bold text-dark" >{bigNumber}</h1>
            </div>
            <Container fluid className="bg-light h-100 mt-1 rounded-2 " >
              <Row  >
                <Col className="col-6 g-1" ><Button onClick={() => dispatch({ type: "CE" })} type="button" className="bg-primary btn-dark w-100 text-uppercase" >CE</Button></Col>
                <Col className="col-3 g-1" ><Button onClick={() => dispatch({ type: "C" })} type="button" className="btn-dark w-100 text-uppercase" >c</Button></Col>
                <Col className="col-3 g-1" ><Button onClick={() => dispatch({ type: "del" })} type="button" className="btn-dark w-100 text-capitalize" >del</Button></Col>
              </Row>
              <Row >
                <Col className="col-3 g-1" ><Button onClick={() => dispatch({ type: "number", value: 7 })} type="button" className="btn-dark w-100 text-uppercase" >7</Button></Col>
                <Col className="col-3 g-1" ><Button onClick={() => dispatch({ type: "number", value: 8 })} type="button" className="btn-dark w-100 text-uppercase" >8</Button></Col>
                <Col className="col-3 g-1" ><Button onClick={() => dispatch({ type: "number", value: 9 })} type="button" className="btn-dark w-100 text-capitalize" >9</Button></Col>
                <Col className="col-3 g-1" ><Button onClick={() => dispatch({ type: "operation", value: "/" })} type="button" className="btn-dark w-100 text-capitalize" >/</Button></Col>
              </Row>
              <Row>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 4 })} className="btn-dark w-100 text-uppercase" >4</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 5 })} className="btn-dark w-100 text-uppercase" >5</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 6 })} className="btn-dark w-100 text-capitalize" >6</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "operation", value: "*" })} className="btn-dark w-100 text-capitalize" >x</Button></Col>
              </Row>
              <Row>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 1 })} className="btn-dark w-100 text-uppercase" >1</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 2 })} className="btn-dark w-100 text-uppercase" >2</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 3 })} className="btn-dark w-100 text-capitalize" >3</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "operation", value: "-" })} className="btn-dark w-100 text-capitalize" >-</Button></Col>
              </Row>
              <Row >
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "operation", value: "+" })} className="btn-dark w-100 text-uppercase" >+</Button></Col>
                <Col className="col-3 g-1" ><Button type="button" onClick={() => dispatch({ type: "number", value: 0 })} className="btn-dark w-100 text-uppercase" >0</Button></Col>
                <Col className="col-6 g-1" ><Button type="button" onClick={() => dispatch({ type: "result" })} className="bg-primary btn-dark w-100 text-capitalize" >=</Button></Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col className="col-2  col-lg-4 " ></Col>
      </Row>
    </Container>
  );
}

export default App;
