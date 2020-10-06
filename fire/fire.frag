#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;
uniform sampler2D explosion;

uniform float time;
uniform float slice=0.1;
uniform sampler2D sampler0;
uniform sampler2D sampler1;
uniform sampler2D sampler2;
uniform sampler2D sampler3;


void main()
{
	
	int frameNumber = int(mod(time/slice, 4));
	
	vec4 correctTexture;
	
	if (frameNumber == 0) {
		correctTexture = texture(sampler0, vtexCoord);
	} else if (frameNumber == 1) {
		correctTexture = texture(sampler1, vtexCoord);
	} else if (frameNumber == 2) {
		correctTexture = texture(sampler2, vtexCoord);
	} else if (frameNumber == 3) {
		correctTexture = texture(sampler3, vtexCoord);
	}
	
    fragColor =  frontColor * correctTexture;
}
