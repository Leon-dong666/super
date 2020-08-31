import {request} from "./request";

//非default导出，导入时要加大括号{}
export function getHomeMultidata(){
  return request({
    
    url:'/home/multidata',
  })
}