import java.util.*;

public class ListaSupermercado {
    public static void main(String[] args) {
        ArrayList<String> compras = new ArrayList<>(Arrays.asList("Manzanas"));
        
        // 1. Añadir "Leche" y "Pan" al final
        compras.add("Leche");
        compras.add("Pan");
        
        // 2. Añadir "Huevos" al inicio
        compras.add(0, "Huevos");
        
        // 3. Eliminar "Manzanas" (segundo elemento)
        compras.remove(1);
        
        System.out.println(compras);
    }
}
