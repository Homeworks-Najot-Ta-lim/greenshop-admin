import { Button, Input } from "antd"
import { FormEvent, useContext, useState } from "react"
import { instance } from "../hooks/instance"
import { data } from "react-router-dom"
import { Context } from "../context/Context"

const Login = () => {
    const {setToken} = useContext(Context)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    function handleSubmitLogin(e:FormEvent<HTMLFormElement>){
        setIsLoading(true)
        e.preventDefault()
        const data = {
            password: (e.target as HTMLFormElement).password.value,
            usernameoremail: (e.target as HTMLFormElement).email.value
        }
        instance().post("/login",data).then(res=>{
            setTimeout(()=>{
                setToken(res.data.access_token)
                localStorage.setItem("user",JSON.stringify(res.data))
            },500)
        }).finally(()=>{
            setTimeout(()=>setIsLoading(false), 500)
        })
    }
  return (
    <div className="flex items-center justify-center h-[100vh] bg-slate-300">
        <form autoComplete="off" onSubmit={handleSubmitLogin} className="w-[400px] p-5 rounded-md bg-white">
            <h1 className="text-[25px] text-center">GreenShop</h1>
            <label htmlFor="">
                <span className="text-[14px] text-slate-500 pl-1 mb-1">Enter your email</span>
                <Input allowClear size="large" placeholder="Enter your email" name="email" type="email" required/>
            </label>
            <label htmlFor="" className="block mt-5">
                <span className="text-[14px] text-slate-500 pl-1 mb-1">Enter your password</span>
                <Input.Password allowClear size="large" name="password" placeholder="Enter your password" type="password" required/>
            </label>
            <Button loading={isLoading} htmlType="submit" type="primary" size="large" className="w-full mx-auto mt-5 text-center">Login</Button>
        </form>
    </div>
  )
}

export default Login