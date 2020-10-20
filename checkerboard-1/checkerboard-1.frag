#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

const float size = 1.0/8; // hay 8 lados en un tablero

const vec4 GREY=vec4(vec3(0.8), 1);
const vec4 BLACK=vec4(vec3(0), 1);

void main()
{
	// Miramos si la posicion x e y es par o no, si ambas son iguales (par ambas o impar ambas) hay que pintar es gris, es 		// decir, la posicion 0 ambas son par, asi que gris, la 1 solo y es par, asi que negro, en la posicion 23 x es impar 		// (7) e y es impar (3) por lo que gris 
	int x=int(mod(vtexCoord.x/size, 2));
  	int y=int(mod(vtexCoord.y/size, 2));
  	fragColor = x==y ? GREY : BLACK;
}
