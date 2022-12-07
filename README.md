# Mortal-Dev
# Animaciones

Para las animaciones utilizamos un Keyframes los cuales dan una ventaja a la hora de manipular las animaciones. Decidimos implementar estás propiedades de CSS puesto que se desarrollaban con objetos DOM.

![image](https://user-images.githubusercontent.com/114504563/206070556-b07edebb-0292-47a0-b7d8-759bf06d1c5e.png)

Implementamos funciones para la transición entre animaciones y a su vez detenerlas  mediante el los metodos del Dom:

![image](https://user-images.githubusercontent.com/114504563/206072199-ce0a2748-0f95-4663-af16-4120d22c7537.png)

![image](https://user-images.githubusercontent.com/114504563/206072387-ce999251-0470-457c-a998-45bffb3ce555.png)

Esta es la función principal donde se hace el llamado de las demás funciones, mediante un "setInterval" se lograba el efecto de videojuego entre las funciones, además de ser el lanzador de audios.

![image](https://user-images.githubusercontent.com/114504563/206073093-7e7246e4-7046-4748-ac1d-0adc0cdfa328.png)

En este evento sobre un botón "addEventListener", escucha la función Lanzar, explicada anteriormente:

![image](https://user-images.githubusercontent.com/114504563/206073954-056f84b5-94c8-4dcb-8e15-dd1c3e72c7e8.png)

Usamos la persistencia de los objetos JSON para visualizar los nombres ingresados anteriormente por el usuario:

![image](https://user-images.githubusercontent.com/114504563/206075186-426ff11d-4576-4b2f-9971-59b56d65b737.png)

Para el desarrollo en HTML decidimos usar div y section, los cuales facilitaban el uso de los sprites. 

![image](https://user-images.githubusercontent.com/114504563/206075874-b6b0c409-e8ec-4b6c-ac8a-5a883d3ad80c.png)

El botón 'Kill' empieza con "display: none" para no interrumpir el flujo de las animaciones.

![image](https://user-images.githubusercontent.com/114504563/206076326-25aabc18-1148-43c9-9aca-b3c3419954d0.png)

# Persistencia

Usando JSON, usamos conversión de elemento de javascript en string, el cual usamos en una condición para saber el tamaño de su arreglo y recorrerlo hasta finalizar todos los objetos.

![image](https://user-images.githubusercontent.com/114504563/206082208-352c9378-e692-48c4-af7d-0f753736048c.png)

Para el primer almacenamiento de los nombres, se implementó un array el cual se duplica para llamar más tarde los elemento de este, mientras que en el otro se elimina.

![image](https://user-images.githubusercontent.com/114504563/206083671-7ddcaf74-a59a-407c-9007-68c91ec8c13c.png)


