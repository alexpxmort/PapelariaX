    /**
 * Página de Adicionar Produto
 * 
 */
    


     import FormCustom from "../../components/form/produto.form"
     import {useDispatch} from 'react-redux'
     import{addProdStart} from '../../reducers/actions/prod/index'
     import {withRouter} from 'react-router-dom'
     import Message from "../../components/msg_alerts/msg_alerts";
     
     const initialData = {
        nome:'',
        descricao:'',
        categoria:'',
        codigoBarra:'',
        quantidade:0
    };
     
     
     const AddProdPage = ({history})=>{
         const dispatch = useDispatch()
     
         const id = 'prod_form';
         
         const addProd =  (data)=>{
             dispatch (addProdStart(data))
         }
     
         const goListProd = ()=>{
             history.push('/');
         }
     
       
         const handleSubmit =  (data)=>{

              addProd(data)
              setTimeout(()=>{
                 goListProd() 
              },1500)
          }
          
         return (
                <FormCustom id={id}  initialData ={initialData} handleSubmit={handleSubmit}/>
         )
     }
     
     export default withRouter(AddProdPage);