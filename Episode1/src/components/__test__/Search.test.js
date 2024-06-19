import { render } from "@testing-library/react"
import Body from "../Body"
// import {Mock_Data} from '../../../__mock__/resListMock.json'
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(Mock_Data)
        }
    })
})
test('should render the body component with search', () => { 
    render(<Body/>)
 })