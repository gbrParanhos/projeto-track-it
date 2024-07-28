Attribute VB_Name = "testando"
Option Explicit

Sub texte2()


        ' Defina o intervalo a ser analisado
    Dim dict As Object
    Dim rng As Range
    Dim ghe As String
    


    
    
    
    
    Dim gheDict As Object
    Set gheDict = CreateObject("Scripting.Dictionary")
        
        i = 2
        While Planilha3.Cells(i, 2) <> ""
        rng = Planilha3.Range("B2:E" & i)
        ghe = Planilha3.Cells(i, 2)
        
        If Not gheDict.Exists(ghe) Then
            

            gheDict.Add ghe, New Collection
            

        End If
            
                gheDict(ghe).Add CreateObject("Scripting.Dictionary")
                
                Const lastItem As Integer = gheDict(ghe).Count
                
                gheDict(ghe)(lastItem).Add "SETOR", Planilha3.Cells(i, 3)
                gheDict(ghe)(lastItem).Add "FUNCAO", Planilha3.Cells(i, 4)
                gheDict(ghe)(lastItem).Add "DA", Planilha3.Cells(i, 5)
                gheDict(ghe)(lastItem).Add "QNT", Planilha3.Cells(i, 6)
        
        i = i + 1
        Wend
   
     
        
       
        
        
        
        

End Sub
