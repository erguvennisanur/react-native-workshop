import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import DataProvider from './DataProvider'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function Providers({children}) {
  return (
 <QueryClientProvider client={queryClient}>
      <DataProvider>{children}</DataProvider>
 </QueryClientProvider>
  )
}

export default Providers
