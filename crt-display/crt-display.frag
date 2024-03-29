#version 330 core

in vec4 frontColor;
out vec4 fragColor;

uniform int n = 2;

void main()
{
	if (mod(int(gl_FragCoord.y), n) == 0) {
    	fragColor = frontColor;
    	return;
    } 
    discard;
}
