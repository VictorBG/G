#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;
uniform sampler2D colorMap;

uniform sampler2D noise0;
uniform sampler2D rock1;
uniform sampler2D grass2;

void main()
{
	vec4 noise = texture(noise0, vtexCoord);
	vec4 rock = texture(rock1, vtexCoord);
	vec4 grass = texture(grass2, vtexCoord);
    fragColor = vec4(
    	(1-noise.r) * rock.r + noise.r * grass.r,
    	(1-noise.r) * rock.g + noise.r * grass.g,
    	(1-noise.r) * rock.b + noise.r * grass.b,
    	1.0
    );
}
