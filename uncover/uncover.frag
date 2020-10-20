#version 330 core

in vec4 frontColor;
in vec4 pos;
out vec4 fragColor;

const float timeMax = 2.0;
uniform float time;

// does not work properly
void main()
{
	float p = pos.x/2 + 1;
	if (p > time ) {
		discard;
	}
    fragColor = vec4(0,0,1,1);
}
