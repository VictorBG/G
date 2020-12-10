#include "showDegree.h"
#include "glwidget.h"

void ShowDegree::onPluginLoad()
{
	const vector<Object> &objs = scene()->objects();
	int num_vertices = 0;
	int num_faces = 0;
	const Object& obj = objs[0];
	const vector<Face> &faces = obj.faces();
	for(int i =0; i<faces.size() ; i++) {
		num_faces += faces[i].numVertices();
	}
	num_vertices += obj.vertices().size();
	degree = (float) num_faces / num_vertices;
	
}

void ShowDegree::preFrame()
{
	
}

void ShowDegree::postFrame()
{
	QFont font;
  font.setPixelSize(25);
  painter.begin(glwidget());
  painter.setFont(font);
  int x = 15;
  int y = 25;
  QString st = "\%1";
  painter.drawText(x, y, st.arg(degree)); 
  painter.end();
}

void ShowDegree::onObjectAdd()
{
	
}

bool ShowDegree::drawScene()
{
	return false; // return true only if implemented
}

bool ShowDegree::drawObject(int)
{
	return false; // return true only if implemented
}

bool ShowDegree::paintGL()
{
	return false; // return true only if implemented
}

void ShowDegree::keyPressEvent(QKeyEvent *)
{
	
}

void ShowDegree::mouseMoveEvent(QMouseEvent *)
{
	
}

