#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float n = 8;


const vec4 GREY=vec4(vec3(0.8), 1);
const vec4 BLACK=vec4(vec3(0), 1);

void main()
{
	// multiplicamos por n para hacer n trozos, entonces habran n veces partes de 0'1, sino todo es de 0-1 por lo que
	// solo hay una raya vertical y horizontal que cumpla lo de <= 0.1
	float x_prop = fract(vtexCoord.x * n);
  	float y_prop = fract(vtexCoord.y * n);
  	fragColor = x_prop <= 0.1 || y_prop <= 0.1 ? BLACK : GREY;
}
