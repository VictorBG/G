#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float n = 8;


const vec4 RED=vec4(1, 0, 0, 1);
const vec4 WHITE=vec4(vec3(1), 1);

const float rad = 0.2;
const vec2 center = vec2(0.5);
void main()
{

	fragColor = distance(vtexCoord, center) <= rad ? RED: WHITE;
	
}
