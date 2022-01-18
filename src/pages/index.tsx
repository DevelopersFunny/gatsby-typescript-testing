import React, {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Layout from '../components/templates/general'
import { Button } from '../components/atoms/Button'
import logo from '../images/logo.svg'

/**
 * Estilando con twin.macro (tailwindcss en js) y styled components
 */
const LayoutClass = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
  `}
`

/**
 * Creando un context de ejemplo haciendo uso de typescript
 *
 * Primero se crea el contexto con un valor por default y lo exportamos en una función
 * para posteriormente hacer uso de ella.
 */
const defaultValue = Symbol('Valor por default de Counter Context')
type defaultValue = symbol

export interface ICounterContext {
  counter: number
  increment: () => void
}

const CounterContext = createContext<defaultValue | ICounterContext>(
  defaultValue
)

export function useCounterContext(): ICounterContext {
  const value = useContext(CounterContext)
  if (value === defaultValue) {
    throw new Error('Por favor inicia el Counter Context')
  }
  return value as ICounterContext
}

/**
 * Creamos una función que va a ser nuestro context provider
 * y le pasamos el valor a los hijos
 * @param counter el valor de nuestro contador el cual vamos a iniciar en 0
 * @param increment la función que va hacer la suma
 * @returns nuestro valor final del contador en una constante value
 */
export function CounterContextProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  const [counter, setCount] = useState(0)
  const increment = useCallback(function () {
    setCount(value => value + 1)
  }, [])

  const value = useMemo(
    function () {
      return {
        counter,
        increment,
      }
    },
    [increment, counter]
  )

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}

/**
 * Creamos nuestra función en la cual vamos a hacer uso del Context
 * utilizando nuestros valores counter e increment.
 * @returns el valor actual de nuestro contador y la función para incrementar dicho valor
 */
export function Counter() {
  const { counter, increment } = useCounterContext()

  return (
    <>
      <p>El contador es: {counter}</p>
      <Button variant="contained" label="Incrementar" onClick={increment} />
    </>
  )
}

/**
 * Finalmente en nuestra función del componente envolvemos con el Provider
 * donde vayamos a consumirlo.
 *
 * Esto puede ir en tu Layout.[jt]sx, si es que va a ser global, para un grupo de paginas/secciones
 * En tu Pagina si es que no sera global, como en este ejemplo sencillo.
 *
 * @returns la vista final de nuestro Context Provider
 */
export default function Home() {
  const pageTitle = 'GatsbyJS TypeScript Testing'

  return (
    <Layout pageTitle={pageTitle}>
      <LayoutClass>
        <CounterContextProvider>
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>Proyecto creado en Gatsby con TypeScript</p>
          <p>Testing haciendo uso de StoryBook, Jest y React Testing Library</p>
        </CounterContextProvider>
      </LayoutClass>
    </Layout>
  )
}
