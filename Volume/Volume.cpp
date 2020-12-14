#include "Volume.h"
#include "glwidget.h"

void Volume::onPluginLoad()
{
	const vector<Object> &objs = scene()->objects();
	int num_obj = objs.size();
	float area= 0.0f;
	for(int i=0; i< num_obj; i++) {
		const Object& obj = objs[i];
		const vector<Vertex> &vertices = obj.vertices();
		const vector<Face> &faces = obj.faces();
		for(int j = 0; j< faces.size(); j++) {
			int index1 = faces[j].vertexIndex(0);
			int index2 = faces[j].vertexIndex(1);
			int index3 = faces[j].vertexIndex(2);
			Point p1 = vertices[index1].coord();
			Point p2 = vertices[index2].coord(); 
			Point p3 = vertices[index3].coord();
			Vector v1(p1.x(), p1.y(), p1.z()); 
			Vector v2(p2.x(), p2.y(), p2.z()); 
			Vector v3(p3.x(), p3.y(), p3.z()); 
			float a = QVector3D::crossProduct(v1-v2, v1-v3).length();
			float A = a / 2.0f;
			float C = (v1 + v2 + v3).z() / 3.0f;
			area += C * faces[j].normal().z() * A;
		}
	}
	
	cout << "Volume: " << area << endl;
}

void Volume::preFrame()
{
	
}

void Volume::postFrame()
{
	
	
}

void Volume::onObjectAdd()
{
	
}

bool Volume::drawScene()
{
	return false; // return true only if implemented
}

bool Volume::drawObject(int)
{
	return false; // return true only if implemented
}

bool Volume::paintGL()
{
	return false; // return true only if implemented
}

void Volume::keyPressEvent(QKeyEvent *)
{
	
}

void Volume::mouseMoveEvent(QMouseEvent *)
{
	
}



